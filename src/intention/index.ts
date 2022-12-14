// https://www.terraform.io/docs/providers/consul/r/intention
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntentionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/intention#action Intention#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/intention#datacenter Intention#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/intention#description Intention#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/intention#destination_name Intention#destination_name}
  */
  readonly destinationName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/intention#destination_namespace Intention#destination_namespace}
  */
  readonly destinationNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/intention#id Intention#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/intention#meta Intention#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/intention#source_name Intention#source_name}
  */
  readonly sourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/intention#source_namespace Intention#source_namespace}
  */
  readonly sourceNamespace?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/consul/r/intention consul_intention}
*/
export class Intention extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_intention";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/consul/r/intention consul_intention} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntentionConfig
  */
  public constructor(scope: Construct, id: string, config: IntentionConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_intention',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.17.0',
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
    this._action = config.action;
    this._datacenter = config.datacenter;
    this._description = config.description;
    this._destinationName = config.destinationName;
    this._destinationNamespace = config.destinationNamespace;
    this._id = config.id;
    this._meta = config.meta;
    this._sourceName = config.sourceName;
    this._sourceNamespace = config.sourceNamespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // datacenter - computed: true, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
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

  // destination_name - computed: false, optional: false, required: true
  private _destinationName?: string; 
  public get destinationName() {
    return this.getStringAttribute('destination_name');
  }
  public set destinationName(value: string) {
    this._destinationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNameInput() {
    return this._destinationName;
  }

  // destination_namespace - computed: false, optional: true, required: false
  private _destinationNamespace?: string; 
  public get destinationNamespace() {
    return this.getStringAttribute('destination_namespace');
  }
  public set destinationNamespace(value: string) {
    this._destinationNamespace = value;
  }
  public resetDestinationNamespace() {
    this._destinationNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNamespaceInput() {
    return this._destinationNamespace;
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

  // meta - computed: false, optional: true, required: false
  private _meta?: { [key: string]: string }; 
  public get meta() {
    return this.getStringMapAttribute('meta');
  }
  public set meta(value: { [key: string]: string }) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // source_namespace - computed: false, optional: true, required: false
  private _sourceNamespace?: string; 
  public get sourceNamespace() {
    return this.getStringAttribute('source_namespace');
  }
  public set sourceNamespace(value: string) {
    this._sourceNamespace = value;
  }
  public resetSourceNamespace() {
    this._sourceNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNamespaceInput() {
    return this._sourceNamespace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      description: cdktf.stringToTerraform(this._description),
      destination_name: cdktf.stringToTerraform(this._destinationName),
      destination_namespace: cdktf.stringToTerraform(this._destinationNamespace),
      id: cdktf.stringToTerraform(this._id),
      meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._meta),
      source_name: cdktf.stringToTerraform(this._sourceName),
      source_namespace: cdktf.stringToTerraform(this._sourceNamespace),
    };
  }
}
