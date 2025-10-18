/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_v2_exported_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigEntryV2ExportedServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_v2_exported_services#id ConfigEntryV2ExportedServices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The kind of exported services config (ExportedServices, NamespaceExportedServices, PartitionExportedServices).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_v2_exported_services#kind ConfigEntryV2ExportedServices#kind}
  */
  readonly kind: string;
  /**
  * The name of the config entry to read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_v2_exported_services#name ConfigEntryV2ExportedServices#name}
  */
  readonly name: string;
  /**
  * The namespace the config entry is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_v2_exported_services#namespace ConfigEntryV2ExportedServices#namespace}
  */
  readonly namespace?: string;
  /**
  * The partition the config entry is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_v2_exported_services#partition ConfigEntryV2ExportedServices#partition}
  */
  readonly partition: string;
  /**
  * The exported service partition consumers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_v2_exported_services#partition_consumers ConfigEntryV2ExportedServices#partition_consumers}
  */
  readonly partitionConsumers?: string[];
  /**
  * The exported service peer consumers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_v2_exported_services#peer_consumers ConfigEntryV2ExportedServices#peer_consumers}
  */
  readonly peerConsumers?: string[];
  /**
  * The exported service sameness group consumers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_v2_exported_services#sameness_group_consumers ConfigEntryV2ExportedServices#sameness_group_consumers}
  */
  readonly samenessGroupConsumers?: string[];
  /**
  * The exported services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_v2_exported_services#services ConfigEntryV2ExportedServices#services}
  */
  readonly services?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_v2_exported_services consul_config_entry_v2_exported_services}
*/
export class ConfigEntryV2ExportedServices extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_config_entry_v2_exported_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigEntryV2ExportedServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigEntryV2ExportedServices to import
  * @param importFromId The id of the existing ConfigEntryV2ExportedServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_v2_exported_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigEntryV2ExportedServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_config_entry_v2_exported_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_v2_exported_services consul_config_entry_v2_exported_services} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigEntryV2ExportedServicesConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigEntryV2ExportedServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_config_entry_v2_exported_services',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.22.1',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._kind = config.kind;
    this._name = config.name;
    this._namespace = config.namespace;
    this._partition = config.partition;
    this._partitionConsumers = config.partitionConsumers;
    this._peerConsumers = config.peerConsumers;
    this._samenessGroupConsumers = config.samenessGroupConsumers;
    this._services = config.services;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // partition - computed: false, optional: false, required: true
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // partition_consumers - computed: false, optional: true, required: false
  private _partitionConsumers?: string[]; 
  public get partitionConsumers() {
    return this.getListAttribute('partition_consumers');
  }
  public set partitionConsumers(value: string[]) {
    this._partitionConsumers = value;
  }
  public resetPartitionConsumers() {
    this._partitionConsumers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionConsumersInput() {
    return this._partitionConsumers;
  }

  // peer_consumers - computed: false, optional: true, required: false
  private _peerConsumers?: string[]; 
  public get peerConsumers() {
    return this.getListAttribute('peer_consumers');
  }
  public set peerConsumers(value: string[]) {
    this._peerConsumers = value;
  }
  public resetPeerConsumers() {
    this._peerConsumers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerConsumersInput() {
    return this._peerConsumers;
  }

  // sameness_group_consumers - computed: false, optional: true, required: false
  private _samenessGroupConsumers?: string[]; 
  public get samenessGroupConsumers() {
    return this.getListAttribute('sameness_group_consumers');
  }
  public set samenessGroupConsumers(value: string[]) {
    this._samenessGroupConsumers = value;
  }
  public resetSamenessGroupConsumers() {
    this._samenessGroupConsumers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samenessGroupConsumersInput() {
    return this._samenessGroupConsumers;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      partition: cdktf.stringToTerraform(this._partition),
      partition_consumers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._partitionConsumers),
      peer_consumers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peerConsumers),
      sameness_group_consumers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._samenessGroupConsumers),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_consumers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._partitionConsumers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      peer_consumers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peerConsumers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sameness_group_consumers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._samenessGroupConsumers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._services),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
