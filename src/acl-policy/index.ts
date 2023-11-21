// https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ACL policy datacenters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_policy#datacenters AclPolicy#datacenters}
  */
  readonly datacenters?: string[];
  /**
  * The ACL policy description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_policy#description AclPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_policy#id AclPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ACL policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_policy#name AclPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_policy#namespace AclPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * The partition the ACL policy is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_policy#partition AclPolicy#partition}
  */
  readonly partition?: string;
  /**
  * The ACL policy rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_policy#rules AclPolicy#rules}
  */
  readonly rules: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_policy consul_acl_policy}
*/
export class AclPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_acl_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AclPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AclPolicy to import
  * @param importFromId The id of the existing AclPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AclPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_acl_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_policy consul_acl_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AclPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_acl_policy',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.20.0',
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
    this._datacenters = config.datacenters;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._partition = config.partition;
    this._rules = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datacenters - computed: false, optional: true, required: false
  private _datacenters?: string[]; 
  public get datacenters() {
    return cdktf.Fn.tolist(this.getListAttribute('datacenters'));
  }
  public set datacenters(value: string[]) {
    this._datacenters = value;
  }
  public resetDatacenters() {
    this._datacenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

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

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // rules - computed: false, optional: false, required: true
  private _rules?: string; 
  public get rules() {
    return this.getStringAttribute('rules');
  }
  public set rules(value: string) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datacenters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._datacenters),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      partition: cdktf.stringToTerraform(this._partition),
      rules: cdktf.stringToTerraform(this._rules),
    };
  }
}
